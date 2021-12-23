package com.intern.plb6.data

import com.intern.plb6.data.local.frefs.AppPreferencesHelper
import com.intern.plb6.data.local.frefs.PreferencesHelper
import com.intern.plb6.data.model.api.*
import com.intern.plb6.data.remote.ApiHelper
import com.intern.plb6.data.remote.AppApiHelper
import io.reactivex.Single

class AppDataManager : DataManager {

    companion object {
        private var mInstance: AppDataManager? = null

        fun getInstance(): AppDataManager? {
            if (mInstance == null) {
                mInstance = AppDataManager()
            }
            return mInstance
        }
    }

    private var mPreferencesHelper: PreferencesHelper? = null
    private var mApiHelper: ApiHelper? = null

    init {
        mPreferencesHelper = AppPreferencesHelper.getInstance()
        mApiHelper = AppApiHelper.getInstance()
    }

    override fun updateUserInfo(
        accessToken: String?,
        userId: Int?,
        userName: String?,
        email: String?,
        pass: String
    ) {
        setAccessToken(accessToken)
        setCurrentUserId(userId)
        setCurrentUserName(userName)
        setCurrentEmail(email)
        setCurrentPassWord(pass)
    }

    override fun getFilms(): Single<List<Film>>? = mApiHelper?.getFilms()

    override fun getFilmsByCategory(category: String): Single<List<Film>>? = mApiHelper?.getFilmsByCategory(category)

    override fun getFilm(id: String): Single<Film>? = mApiHelper?.getFilm(id)

    override fun getUsers(): Single<FilmResponse>? = mApiHelper?.getUsers()

    override fun doRegisterApiCall(registerRequest: RegisterRequest): Single<RegisterResponse>? =
        mApiHelper?.doRegisterApiCall(registerRequest)

    override fun doLoginApiCall(loginRequest: LoginRequest): Single<LoginResponse>? =
        mApiHelper?.doLoginApiCall(loginRequest)

    override fun getCity(): Single<List<City>>? =
        mApiHelper?.getCity()

    override fun getTheaterByCity(cityName: String): Single<List<Theater>>? =
        mApiHelper?.getTheaterByCity(cityName)

    override fun getShowTime(
        idTheater: String,
        idFilm: String,
        date: String
    ): Single<List<ShowTimeResponse>>? =
        mApiHelper?.getShowTime(idTheater, idFilm, date)

    override fun getShowTimeById(idShowTime: String): Single<ShowTimeResponse>? =
        mApiHelper?.getShowTimeById(idShowTime)

    override fun getLocation(idShowTime: String): Single<List<String>>? =
        mApiHelper?.getLocation(idShowTime)

    override fun getPriceType(idType: String): Single<PriceTypeResponse>? =
        mApiHelper?.getPriceType(idType)

    override fun createPayment(request: PaymentRequest): Single<String>? =
        mApiHelper?.createPayment(request)

    override fun getTicket(idAccount: String): Single<List<TicketResponse>>? =
        mApiHelper?.getTicket(idAccount)

    override fun getAccessToken(): String? = mPreferencesHelper?.getAccessToken()

    override fun setAccessToken(accessToken: String?) {
        mPreferencesHelper?.setAccessToken(accessToken)
    }

    override fun getCurrentEmail(): String? = mPreferencesHelper?.getCurrentEmail()

    override fun setCurrentEmail(email: String?) {
        mPreferencesHelper?.setCurrentEmail(email)
    }

    override fun getCurrentUserId(): Int? = mPreferencesHelper?.getCurrentUserId()

    override fun setCurrentUserId(id: Int?) {
        mPreferencesHelper?.setCurrentUserId(id)
    }

    override fun getCurrentUserName(): String? = mPreferencesHelper?.getCurrentUserName()

    override fun setCurrentUserName(name: String?) {
        mPreferencesHelper?.setCurrentUserName(name)
    }

    override fun getCurrentPassWord(): String? = mPreferencesHelper?.getCurrentPassWord()

    override fun setCurrentPassWord(pass: String?) {
        mPreferencesHelper?.setCurrentPassWord(pass)
    }

    override fun checkRememberPass(): Boolean? = mPreferencesHelper?.checkRememberPass()

    override fun setRememberPass(isRemember: Boolean) {
        mPreferencesHelper?.setRememberPass(isRemember)
    }

}