package com.intern.plb6.ui.history

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Base64
import android.view.MenuItem
import android.view.View
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.DividerItemDecoration
import androidx.recyclerview.widget.LinearLayoutManager
import com.bumptech.glide.Glide
import com.google.gson.Gson
import com.intern.plb6.R
import com.intern.plb6.data.model.api.Category
import com.intern.plb6.data.model.api.TicketResponse
import com.intern.plb6.databinding.ActivityHistoryBinding
import com.intern.plb6.databinding.ActivityTicketBinding
import com.intern.plb6.ui.detailfilm.DetailFilmActivity
import com.intern.plb6.ui.home.adapter.FilmsAdapter
import com.intern.plb6.ui.home.view.HomeActivity
import com.intern.plb6.ui.ticket.TicketActivity
import com.intern.plb6.ui.ticket.TicketViewModel
import com.intern.plb6.utils.DateTimeUtils
import com.intern.plb6.utils.Status
import kotlinx.android.synthetic.main.activity_detail_film.*
import kotlinx.android.synthetic.main.activity_history.*
import kotlinx.android.synthetic.main.activity_home.*
import kotlinx.android.synthetic.main.activity_ticket.*
import kotlinx.android.synthetic.main.activity_ticket.toolbar

class HistoryActivity : AppCompatActivity() {

    private lateinit var mViewModel: HistoryViewModel
    private lateinit var mTicketAdapter: TicketAdapter

    companion object {
        const val KEY_TICKET_OBJECT = "key_ticket_object"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_history)

        setupViewModel()
        setupUI()
        setupObserver()
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        if (item.itemId == android.R.id.home) {
            finish()
        }
        return super.onOptionsItemSelected(item)
    }

    private fun setupUI() {
        setSupportActionBar(toolbar)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)

        rclTicket.layoutManager = LinearLayoutManager(this, LinearLayoutManager.VERTICAL, false)
        mTicketAdapter = TicketAdapter(arrayListOf()) {
            val intent = Intent(this, TicketActivity::class.java)
            intent.putExtra(KEY_TICKET_OBJECT, Gson().toJson(it))
            startActivity(intent)
        }
        rclTicket.addItemDecoration(
            DividerItemDecoration(
                rclTicket.context,
                (rclTicket.layoutManager as LinearLayoutManager).orientation
            )
        )
        rclTicket.adapter = mTicketAdapter
    }

    private fun setupViewModel() {
        val binding: ActivityHistoryBinding = DataBindingUtil.setContentView(this, R.layout.activity_history)
        mViewModel = ViewModelProvider(this).get(HistoryViewModel::class.java)
        binding.viewModel = mViewModel
    }

    private fun setupObserver() {
        mViewModel.getTickets().observe(this, Observer {
            when (it.status) {
                Status.SUCCESS -> {
                    it.data?.let { listTicket ->
                        if (listTicket.isNotEmpty()) {
                            txtNoTicket.visibility = View.GONE
                            rclTicket.visibility = View.VISIBLE
                            listTicket.sortedBy { ticket -> DateTimeUtils.convertStringToDate(ticket.timeBooking) }
                            renderListTicket(listTicket)
                        } else {
                            txtNoTicket.visibility = View.VISIBLE
                            rclTicket.visibility = View.GONE
                        }
                    }
                    it.data?.sortedBy { DateTimeUtils.convertStringToDate(it.timeBooking)}
                }
                Status.ERROR -> {
                }
                else -> {

                }
            }
        })
        mViewModel.fetchTicket("5")
    }

    private fun renderListTicket(tickets: List<TicketResponse>) {
        mTicketAdapter.addData(tickets)
    }

}