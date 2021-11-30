# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first

User.destroy_all

demoUser = User.create(username:'demoUser', email:'demoUser@demo.com', password:'demouser1212')

Pin.destroy_all

pin1 = Pin.create(title: 'First try at ombre glitter. Any tips are welcome!', media: 'https://res.cloudinary.com/dzixdb9eu/image/upload/v1638164973/d84f523cf9ad6786cda65a5868dd56dc_hedr0m.jpg', description: 'Nails: for anything and everything to do with nails and nail care!', author_id: 1, pinboard_id: 1)
pin2 = Pin.create(title: '10 Pieces Every Androgynous Style Icon Needs', media: 'https://res.cloudinary.com/dzixdb9eu/image/upload/v1638165237/dca4d3ead5d7aa686e21d6d0e33f5a13_sb2cve.jpg', description: "Androgynous style is more prominent than ever. Gone are the days that you're restricted on where you can shop based on gender!", author_id: 1, pinboard_id: 2)
pin3 = Pin.create(title: 'Gym Inspirational Quote Vinyl Sticker Wall Art', media: 'https://res.cloudinary.com/dzixdb9eu/image/upload/v1638165737/31c91b5fa3f111993d9031347ed40b27_hxd1lf.jpg', author_id: 1, pinboard_id: 1)
pin4 = Pin.create(title: 'Classic bathroom design', media: 'https://res.cloudinary.com/dzixdb9eu/image/upload/v1638052980/7986686ef5b5bac4b6cab11091d8fc45_xezjja.jpg', author_id: 1, pinboard_id: 1)
pin5 = Pin.create(title: "Men's Lookbook", media: 'https://res.cloudinary.com/dzixdb9eu/image/upload/v1638165397/32d1e05d4522ffc4476dab1b903a4292_utrykv.jpg', description: 'Most popular fashion blog for Men | #men #street #style #fashion #lookbook', author_id: 1, pinboard_id: 2)
pin6 = Pin.create(title: "Winter castle, silentfield", media: 'https://res.cloudinary.com/dzixdb9eu/image/upload/v1638165490/3e14a567f9f543c18b41e53845dc9a8c_r6z4uh.jpg',  description: 'Winter castle by silentfield on ArtStation', author_id: 1, pinboard_id: 2)
pin7 = Pin.create(title: "Crusty Brussels sprouts with Dijon aioli", media: 'https://res.cloudinary.com/dzixdb9eu/image/upload/v1638165581/2cf214d98bfb515f8f3e9d6b39c3b353_xl1rwt.jpg', author_id: 1, pinboard_id: 2)
pin7 = Pin.create(title: "Grey and yellow adjustable dog harness", media: 'https://res.cloudinary.com/dzixdb9eu/image/upload/v1638165852/053dd17f7198592b9d5d791b27c3a992_c7qxua.jpg', description: 'Gorgeous flecked grey dog harness set. Leash, collar and poo bag are also available. Great for those summer walks, or training for your new puppy.',author_id: 1, pinboard_id: 2)


