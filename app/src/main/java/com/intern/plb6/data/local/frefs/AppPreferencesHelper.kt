package com.intern.plb6.data.local.frefs

import android.content.Context
import android.content.SharedPreferences

class AppPreferencesHelper : PreferencesHelper {

    companion object {
        private const val PREF_KEY_ACCESS_TOKEN = "PREF_KEY_ACCESS_TOKEN"

        private const val PREF_KEY_CURRENT_USER_EMAIL = "PREF_KEY_CURRENT_USER_EMAIL"

        private const val PREF_KEY_CURRENT_USER_ID = "PREF_KEY_CURRENT_USER_ID"

        private const val PREF_KEY_CURRENT_USER_NAME = "PREF_KEY_CURRENT_USER_NAME"

        private const val PREF_KEY_CURRENT_PASS = "PREF_KEY_CURRENT_PASS"

        private const val PREF_KEY_REMEMBER_PASS = "PREF_KEY_REMEMBER_PASS"

        private const val PREF_FILE_NAME = "com.intern.plb6"

        private var mInstance: AppPreferencesHelper? = null

        fun getInstance(): AppPreferencesHelper? {
            if (mInstance == null) {
                mInstance = AppPreferencesHelper()
            }
            return mInstance
        }
    }

    fun initConfig(context: Context) {
        mPrefs = context.getSharedPreferences(PREF_FILE_NAME, Context.MODE_PRIVATE)
    }

    private lateinit var mPrefs: SharedPreferences

    override fun getAccessToken(): String? = mPrefs.getString(PREF_KEY_ACCESS_TOKEN, null)

    override fun setAccessToken(accessToken: String?) {
        mPrefs.edit().putString(PREF_KEY_ACCESS_TOKEN, accessToken).apply()
    }

    override fun getCurrentEmail(): String? = mPrefs.getString(PREF_KEY_CURRENT_USER_EMAIL, null)

    override fun setCurrentEmail(email: String?) {
        mPrefs.edit().putString(PREF_KEY_CURRENT_USER_EMAIL, email).apply()
    }

    override fun getCurrentUserId(): Int = mPrefs.getInt(PREF_KEY_CURRENT_USER_ID, 0)

    override fun setCurrentUserId(id: Int?) {
        mPrefs.edit().putInt(PREF_KEY_CURRENT_USER_ID, 0).apply()
    }

    override fun getCurrentUserName(): String? = mPrefs.getString(PREF_KEY_CURRENT_USER_NAME, null)

    override fun setCurrentUserName(name: String?) {
        mPrefs.edit().putString(PREF_KEY_CURRENT_USER_NAME, name).apply()
    }

    override fun getCurrentPassWord(): String? = mPrefs.getString(PREF_KEY_CURRENT_PASS, null)

    override fun setCurrentPassWord(pass: String?) {
        mPrefs.edit().putString(PREF_KEY_CURRENT_PASS, pass).apply()
    }

    override fun checkRememberPass(): Boolean = mPrefs.getBoolean(PREF_KEY_REMEMBER_PASS, false)

    override fun setRememberPass(isRemember: Boolean) {
        mPrefs.edit().putBoolean(PREF_KEY_REMEMBER_PASS, isRemember).apply()
    }


}