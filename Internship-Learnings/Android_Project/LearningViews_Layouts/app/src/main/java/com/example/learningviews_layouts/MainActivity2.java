package com.example.learningviews_layouts;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity2 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main2);

        Button profile;
        profile = findViewById(R.id.Profile);

        TextView receiveProject;
        receiveProject = findViewById(R.id.receiveProject);

        Intent intent=getIntent();
        String str = intent.getStringExtra("message_key");
        receiveProject.setText("Your Added Project is : "+str);

        profile.setOnClickListener(v -> {

            Intent backintent = new Intent(MainActivity2.this, MainActivity.class);

            startActivity(backintent);
        });

        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
    }
}