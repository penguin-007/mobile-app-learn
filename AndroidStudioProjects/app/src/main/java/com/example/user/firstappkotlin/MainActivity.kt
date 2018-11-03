package com.example.user.firstappkotlin

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.TextView

class MainActivity : AppCompatActivity() {

    lateinit var text:TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        text = findViewById<TextView>(R.id.btn_text)
        text.setOnClickListener {
            Log.e("firstApp", "click")
            val i = Intent(this, SecondActivity::class.java)

            i.putExtra("text", text.text)

            startActivityForResult(i, 0)
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)

        Log.e("data text2", "onActivityReenter")

        if (data !== null) {
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
        super.onDestroy()
    }
}
