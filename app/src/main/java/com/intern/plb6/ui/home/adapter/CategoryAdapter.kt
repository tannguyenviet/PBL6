package com.intern.plb6.ui.home.adapter

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.intern.plb6.R
import com.intern.plb6.data.model.api.Category
import com.intern.plb6.databinding.ItemCategoryLayoutBinding

class CategoryAdapter(
    private val categories: ArrayList<Category>
) : RecyclerView.Adapter<CategoryAdapter.CategoryViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int) =
        CategoryViewHolder(
            ItemCategoryLayoutBinding.bind(
                LayoutInflater.from(parent.context).inflate(R.layout.item_category_layout, parent, false)
            )
        )

    override fun getItemCount(): Int = categories.size

    override fun onBindViewHolder(holder: CategoryViewHolder, position: Int) =
        holder.bind(categories[position])

    fun addData(list: List<Category>) {
        categories.clear()
        categories.addAll(list)
    }

    class CategoryViewHolder(private val itemCategoryBinding: ItemCategoryLayoutBinding) :
        RecyclerView.ViewHolder(itemCategoryBinding.root) {
            fun bind(category: Category) {
                itemCategoryBinding.txtCategory.text = category.name

                if (category.selected) {
                    itemCategoryBinding.frCategory.setBackgroundResource(R.drawable.bg_category_selected)
                } else {
                    itemCategoryBinding.frCategory.setBackgroundResource(R.drawable.bg_category_no_selected)
                }
            }
        }

}