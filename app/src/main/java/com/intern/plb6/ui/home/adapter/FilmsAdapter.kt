package com.intern.plb6.ui.home.adapter

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.intern.plb6.R
import com.intern.plb6.data.model.api.Film
import com.intern.plb6.databinding.ItemFilmLayoutBinding

class FilmsAdapter(
    private val films: ArrayList<Film>,
    var onClickListener: (Int) -> Unit
) : RecyclerView.Adapter<FilmsAdapter.FilmViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int) =
        FilmViewHolder(
            ItemFilmLayoutBinding.bind(
                LayoutInflater.from(parent.context).inflate(R.layout.item_film_layout, parent, false)
            )
        )

    override fun getItemCount(): Int = films.size

    override fun onBindViewHolder(holder: FilmViewHolder, position: Int) =
        holder.bind(films[position])

    fun addData(list: List<Film>) {
        films.clear()
        films.addAll(list)
    }

    inner class FilmViewHolder(private val itemFilmLayoutBinding: ItemFilmLayoutBinding) :
        RecyclerView.ViewHolder(itemFilmLayoutBinding.root) {
        fun bind(film: Film) {
            Glide.with(itemFilmLayoutBinding.root).load(film.image).into(itemFilmLayoutBinding.imgFilm)
            itemFilmLayoutBinding.txtNameFilm.text = film.name
            itemFilmLayoutBinding.rating.rating = film.rating.toString().toFloat()

            itemFilmLayoutBinding.imgFilm.setOnClickListener {
                film.id?.let { it -> onClickListener.invoke(it) }
            }
        }
    }

}