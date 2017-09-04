from django.shortcuts import render


def main(request):
    return render(request, 'landing_page/landing_page.html')
