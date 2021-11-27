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
pin2 = Pin.create(title: 'Mens Fall Fashion', media: 'https://res.cloudinary.com/dzixdb9eu/image/upload/v1637802475/eyzs0vkvay2t9ho0os5b.jpg', category: 'mens fashion', description: 'Fall essentials', author_id: 1, pinboard_id: 1)
