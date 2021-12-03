package com.intern.plb6.ui.detailfilm.adapter

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.intern.plb6.R
import com.intern.plb6.data.model.mapping.CityMapping
import com.intern.plb6.data.model.mapping.TheaterMapping
import com.intern.plb6.databinding.ItemShowtimeLayoutBinding

class TheaterAdapter(
    private val theaters: ArrayList<TheaterMapping>,
    var onClickListener: (Int) -> Unit
) : RecyclerView.Adapter<TheaterAdapter.TheaterViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int) =
        TheaterViewHolder(
            ItemShowtimeLayoutBinding.bind(
                LayoutInflater.from(parent.context).inflate(R.layout.item_showtime_layout, parent, false)
            )
        )

    override fun getItemCount(): Int = theaters.size

    override fun onBindViewHolder(holder: TheaterViewHolder, position: Int) =
        holder.bind(theaters[position], position)

    fun addData(list: List<TheaterMapping>) {
        theaters.clear()
        theaters.addAll(list)
    }

    inner class TheaterViewHolder(private val itemShowTimeBinding: ItemShowtimeLayoutBinding) :
        RecyclerView.ViewHolder(itemShowTimeBinding.root) {
        fun bind(theaterMapping: TheaterMapping, position: Int) {

            itemShowTimeBinding.txtCategory.text = theaterMapping.theater.name + " - " + theaterMapping.theater.address

            if (theaterMapping.selected) {
                itemShowTimeBinding.frCategory.setBackgroundResource(R.drawable.bg_category_selected)
            } else {
                itemShowTimeBinding.frCategory.setBackgroundResource(R.drawable.bg_category_no_selected)
            }

            itemShowTimeBinding.frCategory.setOnClickListener {
                createSelected()
                theaters[position].selected = true
                notifyDataSetChanged()
                theaterMapping.theater.id?.let { it -> onClickListener.invoke(it) }
            }
        }
    }

    private fun createSelected() {
        for (city in theaters) {
            city.selected = false
        }
    }

}