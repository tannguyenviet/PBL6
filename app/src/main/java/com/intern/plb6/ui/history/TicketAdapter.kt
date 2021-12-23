package com.intern.plb6.ui.history

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.intern.plb6.R
import com.intern.plb6.data.model.api.Film
import com.intern.plb6.data.model.api.TicketResponse
import com.intern.plb6.databinding.ItemHistoryLayoutBinding
import com.intern.plb6.utils.DateTimeUtils

class TicketAdapter(
    private val tickets: ArrayList<TicketResponse>,
    var onClickListener: (TicketResponse) -> Unit
) : RecyclerView.Adapter<TicketAdapter.TicketViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int) =
        TicketViewHolder(
            ItemHistoryLayoutBinding.bind(
                LayoutInflater.from(parent.context).inflate(R.layout.item_history_layout, parent, false)
            )
        )

    override fun getItemCount(): Int = tickets.size

    override fun onBindViewHolder(holder: TicketViewHolder, position: Int) =
        holder.bind(tickets[position])

    fun addData(list: List<TicketResponse>) {
        tickets.clear()
        tickets.addAll(list)
        notifyDataSetChanged()
    }

    inner class TicketViewHolder(private val itemHistoryLayoutBinding: ItemHistoryLayoutBinding) :
        RecyclerView.ViewHolder(itemHistoryLayoutBinding.root) {
        fun bind(ticketResponse: TicketResponse) {
            itemHistoryLayoutBinding.txtNameFilm.text = ticketResponse.filmName
            itemHistoryLayoutBinding.txtLocation.text = ticketResponse.location
            itemHistoryLayoutBinding.txtMovie.text = ticketResponse.theater
            itemHistoryLayoutBinding.txtTime.text = DateTimeUtils.formatDate(ticketResponse.timeStart)

            itemHistoryLayoutBinding.lyTicket.setOnClickListener {
                onClickListener.invoke(ticketResponse)
            }

        }
    }

}