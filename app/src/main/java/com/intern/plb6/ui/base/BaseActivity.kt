package com.intern.plb6.ui.base

import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.intern.plb6.ui.login.view.LoadingFragmentDialog

open class BaseActivity : AppCompatActivity(), BaseNavigator {

    private lateinit var mLoadingFragmentDialog: LoadingFragmentDialog

    override fun loading() {
        mLoadingFragmentDialog = LoadingFragmentDialog()
        mLoadingFragmentDialog.show(supportFragmentManager, null)
    }

    override fun dismissDialog() {
        mLoadingFragmentDialog.dismiss()
    }

    override fun showMessage(mess: String) {
        Toast.makeText(this, mess, Toast.LENGTH_LONG).show()
    }

}