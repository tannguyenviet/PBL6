package com.intern.plb6.ui.home.view

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.DividerItemDecoration
import androidx.recyclerview.widget.LinearLayoutManager
import com.intern.plb6.R
import com.intern.plb6.data.model.api.Category
import com.intern.plb6.data.model.api.Film
import com.intern.plb6.databinding.ActivityHomeBinding
import com.intern.plb6.ui.detailfilm.DetailFilmActivity
import com.intern.plb6.ui.history.HistoryActivity
import com.intern.plb6.ui.home.adapter.CategoryAdapter
import com.intern.plb6.ui.home.adapter.FilmsAdapter
import com.intern.plb6.ui.home.viewmodel.HomeFactory
import com.intern.plb6.ui.home.viewmodel.HomeViewModel
import com.intern.plb6.ui.profile.ProfileActivity
import com.intern.plb6.utils.Status
import kotlinx.android.synthetic.main.activity_home.*

class HomeActivity : AppCompatActivity(), HomeNavigator {

    private lateinit var mCategoryAdapter: CategoryAdapter
    private lateinit var mFilmAdapter: FilmsAdapter
    private lateinit var mViewModel : HomeViewModel

    companion object {
        const val KEY_ID_FILM = "KEY_ID_FILM"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setupViewModel()
        setupUI()
        setupObserver()
    }

    private fun setupViewModel() {
        val binding : ActivityHomeBinding =
            DataBindingUtil.setContentView(this, R.layout.activity_home)
        val factory = HomeFactory(this)
        mViewModel = ViewModelProvider(this, factory).get(HomeViewModel::class.java)
        binding.viewModel = mViewModel
    }

    private fun setupUI() {
        rclShowTime.layoutManager = LinearLayoutManager(this, LinearLayoutManager.HORIZONTAL, false)
        mCategoryAdapter = CategoryAdapter(arrayListOf()) {
            mViewModel.fetchFilm(if (it == "All") "" else it )
        }
        rclShowTime.addItemDecoration(
            DividerItemDecoration(
                rclShowTime.context,
                (rclShowTime.layoutManager as LinearLayoutManager).orientation
            )
        )
        rclShowTime.adapter = mCategoryAdapter

        rclFilm.layoutManager = LinearLayoutManager(this, LinearLayoutManager.HORIZONTAL, false)
        mFilmAdapter = FilmsAdapter(arrayListOf()) {
            val intent = Intent(this, DetailFilmActivity::class.java)
            intent.putExtra(KEY_ID_FILM, it)
            startActivity(intent)
        }
        rclFilm.addItemDecoration(
            DividerItemDecoration(
                rclFilm.context,
                (rclFilm.layoutManager as LinearLayoutManager).orientation
            )
        )
        rclFilm.adapter = mFilmAdapter
    }

    private fun setupObserver() {
        mViewModel.getCategory().observe(this, Observer {
            when (it.status) {
                Status.SUCCESS -> {
                    it.data?.let { categories ->  renderListCategory(categories)}
                }
            }
        })

        mViewModel.getFilms().observe(this, Observer {
            when (it.status) {
                Status.SUCCESS -> {
                    it.data?.let { films ->  renderListFilm(films)}
                }
            }
        })
    }

    private fun renderListCategory(categories: List<Category>) {
        mCategoryAdapter.addData(categories)
        mCategoryAdapter.notifyDataSetChanged()
    }

    private fun renderListFilm(films: List<Film>) {
        mFilmAdapter.addData(films)
        mFilmAdapter.notifyDataSetChanged()
    }

    fun startHistory(view: View) {
        startActivity(Intent(this, HistoryActivity::class.java))
    }

    fun startProfile(view: View) {
        startActivity(Intent(this, ProfileActivity::class.java))
    }
}