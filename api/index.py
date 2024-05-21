"""intellibra API BACKEND"""

from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def intellibra():
    """--Returns index.html--"""
    testimonials = {
        "testifyers": [
            {
                "index": "1",
                "image": "testimonial-1.jpg"
            },
            {
                "index": "2",
                "image": "testimonial-2.jpg"
            },
            {
                "index": "3",
                "image": "testimonial-3.jpg"
            },
            {
                "index": "4",
                "image": "testimonial-4.jpg"
            },
            {
                "index": "5",
                "image": "testimonial-5.jpg"
            },
            {
                "index": "6",
                "image": "testimonial-6.jpg"
            },
            {
                "index": "7",
                "image": "testimonial-7.jpg"
            },
        ],
        "testimonies": [
            {
                "avatar": "testimonial-1_s1.jpg",
                "name": "John Doe",
                "title": "UX designer",
                "testimony": "I have been using intellibra for a while now and I must say it has been a great experience. I have been able to learn a lot and improve my skills. I would recommend it to anyone who wants to learn and improve their skills.",
            },   {
                "avatar": "testimonial-1_s1.jpg",
                "name": "John Doe",
                "title": "UX designer",
                "testimony": "I have been using intellibra for a while now and I must say it has been a great experience. I have been able to learn a lot and improve my skills. I would recommend it to anyone who wants to learn and improve their skills.",
            },   {
                "avatar": "testimonial-1_s1.jpg",
                "name": "John Doe",
                "title": "UX designer",
                "testimony": "I have been using intellibra for a while now and I must say it has been a great experience. I have been able to learn a lot and improve my skills. I would recommend it to anyone who wants to learn and improve their skills.",
            },
            {
                "avatar": "testimonial-1_s1.jpg",
                "name": "John Doe",
                "title": "UX designer",
                "testimony": "I have been using intellibra for a while now and I must say it has been a great experience. I have been able to learn a lot and improve my skills. I would recommend it to anyone who wants to learn and improve their skills.",
            },
        ]
    }
    return render_template('index.html', testimonials=testimonials)


if __name__ == "__main__":
    app.run(debug=True)
