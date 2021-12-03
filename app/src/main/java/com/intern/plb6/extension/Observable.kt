package com.intern.plb6.extension

import io.reactivex.Observable
import io.reactivex.Single
import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.schedulers.Schedulers

internal fun <T> Observable<T>.observeOnUiThread(): Observable<T> =
    this.subscribeOn(Schedulers.io()).observeOn(AndroidSchedulers.mainThread())

internal fun <T> Single<T>.observeOnUiThread(): Single<T> =
    this.subscribeOn(Schedulers.io()).observeOn(AndroidSchedulers.mainThread())

internal fun <T> Observable<T>.observeOnIOThread(): Observable<T> =
    this.subscribeOn(Schedulers.io()).observeOn(Schedulers.io())

internal fun <T> Single<T>.observeOnIOThread(): Single<T> =
    this.subscribeOn(Schedulers.io()).observeOn(Schedulers.io())