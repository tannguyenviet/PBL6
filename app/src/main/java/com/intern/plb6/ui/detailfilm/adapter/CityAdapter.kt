package com.intern.plb6.ui.detailfilm.adapter

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.intern.plb6.R
import com.intern.plb6.data.model.api.ShowTime
import com.intern.plb6.data.model.mapping.CityMapping
import com.intern.plb6.databinding.ItemShowtimeLayoutBinding

class CityAdapter(
    private val cities: ArrayList<CityMapping>,
    var onClickListener: (String) -> Unit
) : RecyclerView.Adapter<CityAdapter.CityViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int) =
        CityViewHolder(
            ItemShowtimeLayoutBinding.bind(
                LayoutInflater.from(parent.context).inflate(R.layout.item_showtime_layout, parent, false)
            )
        )

    override fun getItemCount(): Int = cities.size

    override fun onBindViewHolder(holder: CityViewHolder, position: Int) =
        holder.bind(cities[position], position)

    fun addData(list: List<CityMapping>) {
        cities.clear()
        cities.addAll(list)
    }

    inner class CityViewHolder(private val itemShowTimeBinding: ItemShowtimeLayoutBinding) :
        RecyclerView.ViewHolder(itemShowTimeBinding.root) {
        fun bind(cityMapping: CityMapping, position: Int) {

            itemShowTimeBinding.txtCategory.text = cityMapping.city

            if (cityMapping.selected) {
                itemShowTimeBinding.frCategory.setBackgroundResource(R.drawable.bg_category_selected)
            } else {
                itemShowTimeBinding.frCategory.setBackgroundResource(R.drawable.bg_category_no_selected)
            }

            itemShowTimeBinding.frCategory.setOnClickListener {
                createSelected()
                cities[position].selected = true
                notifyDataSetChanged()
                onClickListener.invoke(cityMapping.city)
            }
        }
    }

    private fun createSelected() {
        for (city in cities) {
            city.selected = false
        }
    }

}