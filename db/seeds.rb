# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user = User.where(email: 'user@test.com').first_or_create(password: '12345678', password_confirmation: '12345678')


apartments_array = [
    {
     street: '400 Blue Way',
     city: 'San Diego',
     state: 'California',
     manager: 'Bruce Wayne',
     email: 'bruce@wayne.com',
     price: '$400',
     bedrooms: 5,
     bathrooms: 4,
     pets: 'yes',
     image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/boardwalk-vintage-monopoly-board-game-theme-card-design-turnpike.jpg',
     user_id: 1
    },
    {
     street: '401 Park Place Way',
     city: 'San Diego',
     state: 'California',
     manager: 'Bruce Wayne',
     email: 'bruce@wayne.com',
     price: '$350',
     bedrooms: 4,
     bathrooms: 3,
     pets: 'yes',
     image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/park-place-vintage-monopoly-board-game-theme-card-design-turnpike.jpg',
     user_id: 1
    },
    {
     street: '402 Pennsylvania Ave',
     city: 'San Diego',
     state: 'California',
     manager: 'Bruce Wayne',
     email: 'bruce@wayne.com',
     price: '$320',
     bedrooms: 3,
     bathrooms: 2,
     pets: 'yes',
     image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pennsylvania-avenue-vintage-retro-monopoly-board-game-card-design-turnpike.jpg',
     user_id: 1
    },
    {
     street: '403 North Carolina Ave',
     city: 'San Diego',
     state: 'California',
     manager: 'Bruce Wayne',
     email: 'bruce@wayne.com',
     price: '$300',
     bedrooms: 2,
     bathrooms: 1,
     pets: 'yes',
     image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/north-carolina-avenue-vintage-retro-monopoly-board-game-card-design-turnpike.jpg',
     user_id: 1
    }
  ]
  
  apartments_array.each do |apartment_obj|
    user.apartments.create apartment_obj
end