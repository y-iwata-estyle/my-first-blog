# Generated by Django 3.2.15 on 2022-10-07 10:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='DailyReport',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=100)),
                ('wow_point', models.CharField(max_length=100)),
                ('source_of_improvement', models.CharField(max_length=100)),
                ('name', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='dashboard.user')),
            ],
        ),
    ]
