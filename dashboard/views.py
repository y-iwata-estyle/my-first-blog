from django.shortcuts import render
from django.views.generic import TemplateView
import matplotlib
import matplotlib.pyplot as plt


    
class MainView:
   def dashboard_view(request): # ViewFunctionと呼ぶ
       template_name = "dashboard/main.html"
       chart_label = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
       chart_data = [[1, 5, 1, 0, 0, 0],[1, 5, 1, 0, 0, 0]]
       context = {'chart_data': chart_data, 'chart_label': chart_label}
       return render(request,template_name,context)

