require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "GET /apartmentindex" do
    it 'returns a list of apartments' do
      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
      user.apartments.create(
        street: "Broadway",
        city: "San Diego",
        state: "CA",
        manager: "Michael Scott",
        email: "MikeScott@dunder.com", 
        price: "$1,700/mo", 
        bedrooms: 2, 
        bathrooms: 2, 
        pets: "Allowed",
        image: 'https://medialibrarycf.entrata.com/17310/MLv3/4/23/2022/3/22/13606/605e2532241e78.66340780565.png'
      )

      get '/apartments'

      apartments = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartments.length).to eq(1)
    end
  end
end