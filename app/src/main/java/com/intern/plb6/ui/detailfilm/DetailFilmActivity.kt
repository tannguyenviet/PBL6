package com.intern.plb6.ui.detailfilm

import android.annotation.SuppressLint
import android.app.AlertDialog
import android.content.Intent
import android.os.Bundle
import android.view.View
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.DividerItemDecoration
import androidx.recyclerview.widget.LinearLayoutManager
import com.bumptech.glide.Glide
import com.intern.plb6.R
import com.intern.plb6.data.model.mapping.CityMapping
import com.intern.plb6.data.model.mapping.ShowTimeMapping
import com.intern.plb6.data.model.mapping.TheaterMapping
import com.intern.plb6.databinding.ActivityDetailFilmBinding
import com.intern.plb6.ui.base.BaseActivity
import com.intern.plb6.ui.detailfilm.adapter.CityAdapter
import com.intern.plb6.ui.detailfilm.adapter.ShowTimeAdapter
import com.intern.plb6.ui.detailfilm.adapter.TheaterAdapter
import com.intern.plb6.ui.home.view.HomeActivity
import com.intern.plb6.ui.reservation.ReservationActivity
import com.intern.plb6.utils.Status
import kotlinx.android.synthetic.main.activity_detail_film.*
import java.util.*

import android.app.DatePickerDialog
import android.app.DatePickerDialog.OnDateSetListener

class DetailFilmActivity : BaseActivity(), DetailNavigator {

    private lateinit var mViewModel: DetailViewModel
    private lateinit var mTimeAdapter: ShowTimeAdapter
    private lateinit var mCityAdapter: CityAdapter
    private lateinit var mTheaterAdapter: TheaterAdapter
    private var checkShowTime = false
    private var mYear = 0
    private var mMonth = 0
    private var mDay = 0
    private var mIdShowTime = -1

    companion object {
        const val KEY_ID_SHOW_TIME = "key_id_show_time"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_detail_film)

        setupViewModel()
        setupUI()
        setupObserver()
    }

    private fun setupViewModel() {
        val binding: ActivityDetailFilmBinding =
            DataBindingUtil.setContentView(this, R.layout.activity_detail_film)
        val factory = DetailFactory(this)
        mViewModel = ViewModelProvider(this, factory).get(DetailViewModel::class.java)
        binding.viewModel = mViewModel
        binding.navigator = this
    }

    private fun setupUI() {

        val id = intent.extras?.get(HomeActivity.KEY_ID_FILM)?.toString()
        if (id != null) {
            mViewModel.fetchFilm(id)
        } else {
            mViewModel.fetchFilm("0")
        }

        setCurrentDate()

        rclTime.layoutManager = LinearLayoutManager(this, LinearLayoutManager.HORIZONTAL, false)
        mTimeAdapter = ShowTimeAdapter(arrayListOf()) { it ->
            it.showTimeResponse.id.let { id ->
                 if (id != null) {
                     mIdShowTime = id
                 }
            }
        }
        rclTime.addItemDecoration(
            DividerItemDecoration(
                rclTime.context,
                (rclTime.layoutManager as LinearLayoutManager).orientation
            )
        )
        rclTime.adapter = mTimeAdapter

        rclCity.layoutManager = LinearLayoutManager(this, LinearLayoutManager.HORIZONTAL, false)
        mCityAdapter = CityAdapter(arrayListOf()) {
            rclTheater.visibility = View.VISIBLE
            rclTime.visibility = View.INVISIBLE
            txtNoShowTime.visibility = View.INVISIBLE
            mViewModel.fetchTheaters(it)
        }
        rclTime.addItemDecoration(
            DividerItemDecoration(
                rclTime.context,
                (rclTime.layoutManager as LinearLayoutManager).orientation
            )
        )
        rclCity.adapter = mCityAdapter

        rclTheater.layoutManager = LinearLayoutManager(this, LinearLayoutManager.HORIZONTAL, false)
        mTheaterAdapter = TheaterAdapter(arrayListOf()) {
            rclTime.visibility = View.INVISIBLE
            mViewModel.fetchShowtime(it.toString(), id.toString(), "$mYear-$mMonth-$mDay")
        }
        rclTheater.addItemDecoration(
            DividerItemDecoration(
                rclTime.context,
                (rclTime.layoutManager as LinearLayoutManager).orientation
            )
        )
        rclTheater.adapter = mTheaterAdapter
    }

    @SuppressLint("SetTextI18n")
    private fun setCurrentDate() {
        val calendar = Calendar.getInstance()
        mYear = calendar.get(Calendar.YEAR)

        mMonth = calendar.get(Calendar.MONTH)  + 1
        mDay = calendar.get(Calendar.DAY_OF_MONTH)
        txtDate.text = "$mDay-$mMonth-$mYear"
    }

    private fun setupObserver() {
        mViewModel.getShowTimes().observe(this, Observer {
            when (it.status) {
                Status.SUCCESS -> {
                    rclTime.visibility = View.VISIBLE
                    txtNoShowTime.visibility = View.INVISIBLE
                    renderListTime(it.data)
                    checkShowTime = true
                }
                Status.ERROR -> {
                    rclTime.visibility = View.INVISIBLE
                    txtNoShowTime.visibility = View.VISIBLE
                    checkShowTime = false
                }
                else -> {

                }
            }
        })

        mViewModel.getFilms().observe(this, Observer {
            when (it.status) {
                Status.SUCCESS -> {
                    it.data?.let { film ->
                        Glide.with(this).load(film.image).into(imgFilm)
                        txtNameFilm.text = film.name
                        rating.rating = film.rating?.toFloat() ?: 0F
                        txtLengthMovie.text = "Movie length: " + film.duration + " Mins"
                        txtDetailFilm.text = film.description
                    }
                }
                Status.ERROR -> {

                }
                else -> {

                }
            }
        })

        mViewModel.getCities().observe(this, Observer {
            when (it.status) {
                Status.SUCCESS -> {
                    it.data?.let { cities ->
                        renderListCities(cities)
                    }
                }
                Status.ERROR -> {

                }
                else -> {

                }
            }
        })

        mViewModel.getTheaters().observe(this, Observer {
            when (it.status) {
                Status.SUCCESS -> {
                    it.data?.let { cities ->
                        renderListTheaters(cities)
                    }
                }
                Status.ERROR -> {

                }
                else -> {

                }
            }
        })
    }

    fun showDialog(view: View) {
        DatePickerDialog(this, AlertDialog.THEME_HOLO_LIGHT, mDateListener, mYear, mMonth - 1, mDay).show()
    }

    @SuppressLint("SetTextI18n")
    private val mDateListener =
        OnDateSetListener { arg0, arg1, arg2, arg3 ->
            mYear = arg1
            mMonth = arg2 + 1
            mDay = arg3
            txtDate.text = "$mDay-$mMonth-$mYear"
        }

    private fun renderListTheaters(theater: List<TheaterMapping>) {
        mTheaterAdapter.addData(theater)
        mTheaterAdapter.notifyDataSetChanged()
    }

    private fun renderListCities(cities: List<CityMapping>) {
        mCityAdapter.addData(cities)
        mCityAdapter.notifyDataSetChanged()
    }

    private fun renderListTime(times: List<ShowTimeMapping>?) {
        mTimeAdapter.addData(times)
        mTimeAdapter.notifyDataSetChanged()
    }

    override fun openReservationActivity() {
        if (mIdShowTime != -1) {
            val intent = Intent(this, ReservationActivity::class.java)
            intent.putExtra(KEY_ID_SHOW_TIME, mIdShowTime)
            startActivity(intent)
        }
    }

}