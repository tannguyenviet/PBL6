package com.intern.plb6.ui.detailfilm

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider

class DetailFactory(private val navigator: DetailNavigator): ViewModelProvider.Factory {

    override fun <T : ViewModel?> create(modelClass: Class<T>): T {
        if (modelClass.isAssignableFrom(DetailViewModel::class.java)) {
            return DetailViewModel(navigator) as T
        }
        throw IllegalArgumentException("Unknown class name")
    }

}