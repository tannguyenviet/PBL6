package com.intern.plb6.ui.ticket

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Base64
import android.view.MenuItem
import android.widget.Toast
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import com.bumptech.glide.Glide
import com.google.gson.Gson
import com.intern.plb6.R
import com.intern.plb6.data.model.api.TicketResponse
import com.intern.plb6.databinding.ActivityPaymentBinding
import com.intern.plb6.databinding.ActivityTicketBinding
import com.intern.plb6.ui.history.HistoryActivity
import com.intern.plb6.ui.home.view.HomeActivity
import com.intern.plb6.ui.vnpay.PaymentViewModel
import com.intern.plb6.utils.DateTimeUtils
import com.intern.plb6.utils.SortUtils
import com.intern.plb6.utils.Status
import kotlinx.android.synthetic.main.activity_ticket.*

class TicketActivity : AppCompatActivity() {

    private lateinit var mViewModel: TicketViewModel
    private var json: String = ""

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_ticket)

        setupUI()
        setupViewModel()
        setupObserver()

    }

    private fun setupUI() {
        setSupportActionBar(toolbar)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)

        json = intent.extras?.getString(HistoryActivity.KEY_TICKET_OBJECT, "") ?: ""
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        if (item.itemId == android.R.id.home) {
            finish()
            startActivity(Intent(this, HomeActivity::class.java))
        }
        return super.onOptionsItemSelected(item)
    }

    override fun onBackPressed() {
        super.onBackPressed()
        finish()
        startActivity(Intent(this, HomeActivity::class.java))
    }

    private fun setupViewModel() {
        val binding: ActivityTicketBinding = DataBindingUtil.setContentView(this, R.layout.activity_ticket)
        mViewModel = ViewModelProvider(this).get(TicketViewModel::class.java)
        binding.viewModel = mViewModel
    }

    private fun setupObserver() {
        mViewModel.getTickets().observe(this, Observer {
            when (it.status) {
                Status.SUCCESS -> {
                    var list = it.data
                    list = SortUtils.sortTicket(list as ArrayList<TicketResponse>)
                    list[0].let { ticket ->
                        txtNameFilm.text = ticket.filmName
                        txtPriceType.text = "${ticket.city} - ${ticket.theater}"
                        txtDate.text = ticket.date
                        txtTime.text = DateTimeUtils.formatDate(ticket.timeStart)
                        txtLocation.text = ticket.location
                        val imageByteArray = Base64.decode(ticket.ticketQR?.replace("data:image/png;base64,", ""), Base64.DEFAULT)
                        Glide.with(this).load(imageByteArray).into(imgQR)
                    }
                }
                Status.ERROR -> {
                }
                else -> {

                }
            }
        })
        if (json.isNullOrEmpty()) {
            mViewModel.fetchTicket("5")
        } else {
            mViewModel.setTicket(Gson().fromJson(json, TicketResponse::class.java))
        }
    }

}