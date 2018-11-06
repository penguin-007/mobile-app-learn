package com.example.user.firstappkotlin

import android.content.Intent
import android.os.AsyncTask
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.TextView
import com.google.gson.Gson
import java.util.*

import io.reactivex.Observable
import io.reactivex.Scheduler
import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.disposables.Disposable
import io.reactivex.schedulers.Schedulers
import java.lang.RuntimeException
import java.net.HttpURLConnection
import java.net.URL
import java.sql.Array

class MainActivity : AppCompatActivity() {

    // переменная, содержит текст на первом экране
    lateinit var text: TextView

    // переменная для сохранения результата subscribe
    var requestFromSub: Disposable? = null

    // url
    val urlFeedNews = "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Frss.xml"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main) // установка layout для этого активити

        text = findViewById<TextView>(R.id.btn_text) // поиск элемента

        // установка listener
        text.setOnClickListener {
            Log.e("firstApp", "click")

//            // переход к другому активити
//            val i = Intent(this, SecondActivity::class.java)
//
//            // добавить в intent дополнительные данные
//            i.putExtra("text", text.text)
//
//            // при старте другого активити ждем от него ответа
//            startActivityForResult(i, 0)

            // HTTP запросы
            val observable = createRequestOnUrl(urlFeedNews).map {
                Log.e("Feed createRequestOnUrl", "12")
                Gson().fromJson(it, Feed::class.java)
            }.subscribeOn(Schedulers.io()).observeOn(AndroidSchedulers.mainThread())

            requestFromSub = observable.subscribe({
                for (item in it.items)
                    Log.w("FeedData", "title ${item.title}")
            }, {
                Log.e("FeedError", "", it)
            })

        }
    }

    // мы ждем ответа от другого активити
    // когда от него придут данные они попадут в этот коллбэек
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)

        // вывод логов
        Log.e("data text2", "onActivityReenter")

        if (data !== null) {
            // получение экстраданных отправленых другим активити
            val text2 = data.getStringExtra("text2")
            text.text = text2
        }
    }

    // редко
    override fun onStart() {
        super.onStart()
    }

    // 2. при полном старте приложения, когда можно пользоваться
    override fun onResume() {
        super.onResume()
    }

    // когда приложение свернул
    // надо остановить все что было вызвано в onresume
    override fun onPause() {
        super.onPause()
    }

    // редко
    override fun onStop() {
        super.onStop()
    }

    // конец жизни приложение
    // можно удалить закешированне данные
    override fun onDestroy() {
        // обрываем метод подписки
        requestFromSub?.dispose()

        super.onDestroy()
    }
}


class Feed {
    val items: ArrayList<FeedItem> = ArrayList()
}

class FeedItem {
    val title: String = ""
    val link: String = ""
    val thumbnail: String = ""
    val description: String = ""
}