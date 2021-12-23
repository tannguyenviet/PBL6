package com.intern.plb6.ui.detailfilm.adapter

import android.annotation.SuppressLint
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.intern.plb6.R
import com.intern.plb6.data.model.mapping.ShowTimeMapping
import com.intern.plb6.databinding.ItemShowtimeLayoutBinding
import com.intern.plb6.utils.DateTimeUtils

class ShowTimeAdapter(
    private val showTimes: ArrayList<ShowTimeMapping>,
    var onClickListener: (ShowTimeMapping) -> Unit
) : RecyclerView.Adapter<ShowTimeAdapter.ShowTimeViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int) =
        ShowTimeViewHolder(
            ItemShowtimeLayoutBinding.bind(
                LayoutInflater.from(parent.context).inflate(R.layout.item_showtime_layout, parent, false)
            )
        )

    override fun getItemCount(): Int = showTimes.size

    override fun onBindViewHolder(holder: ShowTimeViewHolder, position: Int) =
        holder.bind(showTimes[position], position)

    fun addData(list: List<ShowTimeMapping>?) {
        showTimes.clear()
        if (list != null) {
            showTimes.addAll(list)
        }
    }

    inner class ShowTimeViewHolder(private val itemShowTimeBinding: ItemShowtimeLayoutBinding) :
        RecyclerView.ViewHolder(itemShowTimeBinding.root) {
            @SuppressLint("SimpleDateFormat")
            fun bind(showTime: ShowTimeMapping, position: Int) {

                val timeStart: String = DateTimeUtils.formatDateFromDB(showTime.showTimeResponse.timeStart)
                val timeEnd: String = DateTimeUtils.formatDateFromDB(showTime.showTimeResponse.timeEnd)

                itemShowTimeBinding.txtCategory.text = "$timeStart - $timeEnd"

                if (showTime.selected) {
                    itemShowTimeBinding.frCategory.setBackgroundResource(R.drawable.bg_category_selected)
                } else {
                    itemShowTimeBinding.frCategory.setBackgroundResource(R.drawable.bg_category_no_selected)
                }

                itemShowTimeBinding.frCategory.setOnClickListener {
                    createSelected()
                    showTimes[position].selected = true
                    notifyDataSetChanged()
                    onClickListener.invoke(showTime)
                }

            }
        }

    private fun createSelected() {
        for (showTime in showTimes) {
            showTime.selected = false
        }
    }

}