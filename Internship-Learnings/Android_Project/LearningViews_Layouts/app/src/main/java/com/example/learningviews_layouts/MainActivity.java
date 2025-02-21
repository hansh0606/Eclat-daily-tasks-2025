package com.example.learningviews_layouts;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        EditText project = findViewById(R.id.sendProject);
        Button nextActivity = findViewById(R.id.nextActivity);

        nextActivity.setOnClickListener(v -> {
            // Get the latest text inside the button click event
            String str = project.getText().toString().trim();

            if (!TextUtils.isEmpty(str)) {
                // Create Intent to start SecondActivity
                Intent intent = new Intent(MainActivity.this, MainActivity2.class);
                intent.putExtra("message_key", str);
                startActivity(intent);
            } else {
                // Show a toast message
                Toast.makeText(MainActivity.this, "Add your project!!", Toast.LENGTH_SHORT).show();
            }
        });

        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
    }
}
