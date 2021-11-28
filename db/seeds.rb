# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first

User.destroy_all

demoUser = User.create(username:'demoUser', email:'demoUser@demo.com', password:'password')

Pin.destroy_all

pin1 = Pin.create(title: 'Womens Fall Fashion', media: 'https://res.cloudinary.com/dzixdb9eu/image/upload/v1637801831/xcvv1quiudvj6cgtdmx3.jpg', category: 'womens fashion', author_id: 1, pinboard_id: 1)
pin2 = Pin.create(title: 'Mens Fall Fashion', media: 'https://res.cloudinary.com/dzixdb9eu/image/upload/v1637802475/eyzs0vkvay2t9ho0os5b.jpg', category: 'mens fashion', description: 'Fall essentials', author_id: 1, pinboard_id: 2)
pin3 = Pin.create(media: 'https://res.cloudinary.com/dzixdb9eu/image/upload/v1638052875/eaf6abad7e188b895014dca7e5ef1204_tl7bea.jpg', category: 'home decor', description: 'Bedroom inspo', author_id: 1, pinboard_id: 1)
pin4 = Pin.create(title: 'Bathroom inspo', media: 'https://res.cloudinary.com/dzixdb9eu/image/upload/v1638052980/7986686ef5b5bac4b6cab11091d8fc45_xezjja.jpg', category: 'home decor', description: 'Modern bathroom designs', author_id: 1, pinboard_id: 1)
pin5 = Pin.create(title: 'Easy Chicken Dinner', media: 'https://res.cloudinary.com/dzixdb9eu/image/upload/v1638053115/f8ea2507b5ce89cfa6de4f8d1347ed54_nqomxk.jpg', category: 'food', description: 'Delicious meal idea', author_id: 1, pinboard_id: 2)
