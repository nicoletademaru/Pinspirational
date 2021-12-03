# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first
Pin.destroy_all
Pinboard.destroy_all
User.destroy_all

require 'open-uri'

## User seeds
demoUser = User.create(id: 1, username:'demoUser', email:'demoUser@demo.com', password:'demouser1212')
demoUser2 = User.create(id: 2, username:'demoUser2', email:'demoUser2@demo.com', password:'demouser123123')

## Pinboard seeds
pinboard1 = Pinboard.create(id: 1, title: 'Plant Palace', user_id: 1)
pinboard2 = Pinboard.create(id: 2, title: 'Mans Best Friend', user_id: 2)
pinboard3 = Pinboard.create(id: 3, title: 'Future Home', user_id: 2)
pinboard4 = Pinboard.create(id: 4, title: 'Travel Inspiration', user_id: 1)


## Pin seeds

## bucketlist
pin4 = Pin.create(id: 4,title: "Paris in one day",  description: 'Interary for anyone planning a short trip to Paris', author_id: 1, pinboard_id: 4)
pin6 = Pin.create(id: 6,title: "Waterfall Scene",  description: 'photographer: unknown', author_id: 1, pinboard_id: 4)
pin11 = Pin.create(id: 11,title: "Northern Lights",  description: 'The best places and times to catch the aurora borealis', author_id: 1, pinboard_id: 4)
pin14 = Pin.create(id: 14,title: "San Francisco, CA",  description: 'Tourist-y things to avoid', author_id: 1, pinboard_id: 4)
pin18 = Pin.create(id: 18,title: "Top Hikes in Canada", author_id: 1, pinboard_id: 4)
pin21 = Pin.create(id: 21,title: "Relaxing Destinations", description: "Your next vacation spot is here", author_id: 1, pinboard_id: 4)
pin26 = Pin.create(id: 26,title: "Winter in Switzerland", description: "A winter wonderland", author_id: 1, pinboard_id: 4)
pin31 = Pin.create(id: 31,title: "Beautiful architecture around the world", description: "Architecture inspiration", author_id: 1, pinboard_id: 4)
## home decor
pin1 = Pin.create(id: 1, title: 'Classic white home decor', description: 'Inspiration for your next remodel', author_id: 2, pinboard_id: 3)
pin5 = Pin.create(id: 5, title: 'Bathroom with fireplace', description: 'Perfect after a long day...', author_id: 2, pinboard_id: 3)
pin9 = Pin.create(id: 9, title: "Minimalistic Dining Room", author_id: 2, pinboard_id: 3)
pin13 = Pin.create(id: 13, title: "Classy pop of color", description: "Subtle way to add a pop of color to your living room", author_id: 2, pinboard_id: 3)
pin17 = Pin.create(id: 17, description: "Beautiful dining area with fireplace", author_id: 2, pinboard_id: 3)
pin22 = Pin.create(id: 22, title: "Accents for a black Dresser", description: "Style ideas for the bedroom", author_id: 2, pinboard_id: 3)
pin25 = Pin.create(id: 25, title: "Cute bedroom themes", description: "Themes for everyone", author_id: 2, pinboard_id: 3)
pin29 = Pin.create(id: 29, title: "Simple Laundry Room Ideas", author_id: 2, pinboard_id: 3)
## best friend
pin3 = Pin.create(id: 3,author_id: 2, pinboard_id: 2)
pin8 = Pin.create(id: 8, title: 'Cute and Cuddly', author_id: 2, pinboard_id: 2)
pin10 = Pin.create(id: 10,title: 'Best outdoor-sy, active breeds', description: "Learn about the best breeds to consider for your next adventure buddy",author_id: 2, pinboard_id: 2)
pin15 = Pin.create(id: 15,title: 'Goodest doggo', description: "Learn about the best breeds to consider for your next adventure buddy",author_id: 2, pinboard_id: 2)
pin20 = Pin.create(id: 20, title: 'Why 2 dogs are better than 1', description: "Get a second best friend, you know you want to",author_id: 2, pinboard_id: 2)
pin24 = Pin.create(id: 24, title: 'Besties', description: "Cute poodles",author_id: 2, pinboard_id: 2)
pin27 = Pin.create(id: 27, title: 'Pomsky mix', description: "One of the best mixes",author_id: 2, pinboard_id: 2)
pin30 = Pin.create(id: 30, title: 'Adorable puppies', description: "Puppy fever",author_id: 2, pinboard_id: 2)
## green thumb
pin2 = Pin.create(id: 2, title: 'Plant corner inspo', description: "Indoor picnic with plant ", author_id: 1, pinboard_id: 1)
pin7 = Pin.create(id: 7, title: 'A Single Plant', author_id: 1, pinboard_id: 1)
pin12 = Pin.create(id: 12, title: "Indoor plant decorations", description: 'How to guide to incorporate plants into your home', author_id: 1, pinboard_id: 1)
pin16 = Pin.create(id: 16, description: 'Unique and fun plant for your home', author_id: 1, pinboard_id: 1)
pin19 = Pin.create(id: 19, title: "Nursery corner", description: 'plants galore', author_id: 1, pinboard_id: 1)
pin23 = Pin.create(id: 23, title: "How to keep your plants happy and healthy", description: 'plant health tips', author_id: 1, pinboard_id: 1)
pin28 = Pin.create(id: 28, title: "Plant friends", description: 'A plant for everybody', author_id: 1, pinboard_id: 1)
pin32 = Pin.create(id: 32, title: "Pink plant aesthetic", author_id: 1, pinboard_id: 1)


##bucketlist
file4 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/louv.jpeg')
file6 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/waterfall.jpeg')
file11 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/auroralight.jpeg')
file14 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/goldengate.jpeg')
file18 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/canada.jpeg')
file21 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/beach.jpeg')
file26 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/switz.jpeg')
file31 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/london.jpeg')
## home decor
file1 = open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/home-decor.jpeg')
file5 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/bathroom.jpeg')
file9 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/dining.jpeg')
file13 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/greencouch.jpeg')
file17 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/moderndining.jpeg')
file22 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/bedroom.jpeg')
file25 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/rustichome.jpeg')
file29 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/laundry.jpeg')
##best friend
file3 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/dog.jpeg')
file8 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/banket-dog.jpeg')
file10 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/beach-dog.jpeg')
file15 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/big-doggo.jpeg')
file20 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/dog-swing.jpeg')
file24 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/poodles.jpeg')
file27 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/pomsky.jpeg')
file30 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/grass-puppy.jpeg')
## green thumb
file2 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/plants.jpeg')
file7 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/single-plant.jpeg')
file12 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/windowplant.jpeg')
file16 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/pinkplant.jpeg')
file19 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/indoorplant.jpeg')
file23 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/tall-plant.jpeg')
file28 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/plantfriends.jpeg')
file32 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/pink-plant-chari.jpeg')



## bucketlist
pin4.photo.attach(io: file4, filename: 'file4.jpg')
pin6.photo.attach(io: file6, filename: 'file6.jpg')
pin11.photo.attach(io: file11, filename: 'file11.jpg')
pin14.photo.attach(io: file14, filename: 'file14.jpg')
pin18.photo.attach(io: file18, filename: 'file18.jpg')
pin21.photo.attach(io: file21, filename: 'file21.jpg')
pin26.photo.attach(io: file26, filename: 'file26.jpg')
pin31.photo.attach(io: file31, filename: 'file31.jpg')
## home decor
pin1.photo.attach(io: file1, filename: 'file1.jpg')
pin5.photo.attach(io: file5, filename: 'file5.jpg')
pin9.photo.attach(io: file9, filename: 'file9.jpg')
pin13.photo.attach(io: file13, filename: 'file13.jpg')
pin17.photo.attach(io: file17, filename: 'file17.jpg')
pin22.photo.attach(io: file22, filename: 'file22.jpg')
pin25.photo.attach(io: file25, filename: 'file25.jpg')
pin29.photo.attach(io: file29, filename: 'file29.jpg')
## best friend
pin3.photo.attach(io: file3, filename: 'file3.jpg')
pin8.photo.attach(io: file8, filename: 'file8.jpg')
pin10.photo.attach(io: file10, filename: 'file10.jpg')
pin15.photo.attach(io: file15, filename: 'file15.jpg')
pin20.photo.attach(io: file20, filename: 'file20.jpg')
pin24.photo.attach(io: file24, filename: 'file24.jpg')
pin27.photo.attach(io: file27, filename: 'file27.jpg')
pin30.photo.attach(io: file30, filename: 'file30.jpg')
## green thumb
pin2.photo.attach(io: file2, filename: 'file2.jpg')
pin7.photo.attach(io: file7, filename: 'file7.jpg')
pin12.photo.attach(io: file12, filename: 'file12.jpg')
pin16.photo.attach(io: file16, filename: 'file16.jpg')
pin19.photo.attach(io: file19, filename: 'file19.jpg')
pin23.photo.attach(io: file23, filename: 'file23.jpg')
pin28.photo.attach(io: file28, filename: 'file38.jpg')
pin32.photo.attach(io: file32, filename: 'file32.jpg')


## Pinnings 
pinning1 = Pinning.create(pin_id: 2, pinboard_id: 1)
pinning2 = Pinning.create(pin_id: 7, pinboard_id: 1)
pinning3 = Pinning.create(pin_id: 12, pinboard_id: 1)
pinning4 = Pinning.create(pin_id: 16, pinboard_id: 1)
pinning5 = Pinning.create(pin_id: 19, pinboard_id: 1)
pinning6 = Pinning.create(pin_id: 23, pinboard_id: 1)
pinning7 = Pinning.create(pin_id: 28, pinboard_id: 1)
pinning8 = Pinning.create(pin_id: 32, pinboard_id: 1)
pinning9 = Pinning.create(pin_id: 3, pinboard_id: 2)
pinning10 = Pinning.create(pin_id: 8, pinboard_id: 2)
pinning11 = Pinning.create(pin_id: 10, pinboard_id: 2)
pinning12 = Pinning.create(pin_id: 15, pinboard_id: 2)
pinning13 = Pinning.create(pin_id: 20, pinboard_id: 2)
pinning14 = Pinning.create(pin_id: 24, pinboard_id: 2)
pinning15 = Pinning.create(pin_id: 27, pinboard_id: 2)
pinning16 = Pinning.create(pin_id: 30, pinboard_id: 2)
pinning17 = Pinning.create(pin_id: 1, pinboard_id: 3)
pinning18 = Pinning.create(pin_id: 5, pinboard_id: 3)
pinning19 = Pinning.create(pin_id: 9, pinboard_id: 3)
pinning20 = Pinning.create(pin_id: 13, pinboard_id: 3)
pinning21 = Pinning.create(pin_id: 17, pinboard_id: 3)
pinning22 = Pinning.create(pin_id: 22, pinboard_id: 3)
pinning23 = Pinning.create(pin_id: 25, pinboard_id: 3)
pinning24 = Pinning.create(pin_id: 29, pinboard_id: 3)
pinning25 = Pinning.create(pin_id: 4, pinboard_id: 4)
pinning26 = Pinning.create(pin_id: 6, pinboard_id: 4)
pinning27 = Pinning.create(pin_id: 11, pinboard_id: 4)
pinning28 = Pinning.create(pin_id: 14, pinboard_id: 4)
pinning29 = Pinning.create(pin_id: 18, pinboard_id: 4)
pinning30 = Pinning.create(pin_id: 21, pinboard_id: 4)
pinning31 = Pinning.create(pin_id: 26, pinboard_id: 4)
pinning32 = Pinning.create(pin_id: 31, pinboard_id: 4)