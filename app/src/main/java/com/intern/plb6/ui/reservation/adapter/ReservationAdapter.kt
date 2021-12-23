package com.intern.plb6.ui.reservation.adapter

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.intern.plb6.R
import com.intern.plb6.data.model.other.Location
import com.intern.plb6.databinding.ItemReservationLayoutBinding

class ReservationAdapter(
    private val locations: ArrayList<Location>,
    var onClickListener: (Int) -> Unit
) : RecyclerView.Adapter<ReservationAdapter.ReservationViewHolder>() {

    private var mCountSelected = 0

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int) =
        ReservationViewHolder(
            ItemReservationLayoutBinding.bind(
                LayoutInflater.from(parent.context).inflate(R.layout.item_reservation_layout, parent, false)
            )
        )

    override fun getItemCount(): Int = locations.size

    override fun onBindViewHolder(holder: ReservationViewHolder, position: Int) =
        holder.bind(locations[position], position)

    fun addData(list: List<Location>?) {
        locations.clear()
        if (list != null) {
            locations.addAll(list)
        }
    }

    inner class ReservationViewHolder(private val itemReservationLayoutBinding: ItemReservationLayoutBinding) :
        RecyclerView.ViewHolder(itemReservationLayoutBinding.root) {

        fun bind(location: Location, position: Int) {

            if (location.booking) {
                itemReservationLayoutBinding.imgBooking.setBackgroundResource(R.drawable.bg_booked)
            } else {
                if (location.selected) {
                    itemReservationLayoutBinding.imgBooking.setBackgroundResource(R.drawable.bg_selected)
                } else {
                    itemReservationLayoutBinding.imgBooking.setBackgroundResource  (R.drawable.bg_available)
                }
            }

            itemReservationLayoutBinding.imgBooking.text = location.location

            itemReservationLayoutBinding.imgBooking.setOnClickListener {
                if (!location.booking) {
                    locations[position].selected = !location.selected
                    mCountSelected += if (location.selected) 1 else -1
                }
                notifyDataSetChanged()
                onClickListener.invoke(mCountSelected)
            }
        }
    }

    fun getLocation() : String {
        var str = ""
        for (i in locations) {
            if (i.selected) {
                if (str.isNullOrEmpty()) {
                    str = str + i.location
                } else {
                    str = str + "," + i.location
                }
            }
        }
        return str
    }

}