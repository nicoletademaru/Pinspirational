
json.user do 
  json.partial! "/api/users/user", user: @user
end 

json.pinboards do  
  @pinboards.each do |pinboard| 
    @pinnings = Pinning.where(pinboard_id: pinboard.id)
    json.set! pinboard.id do 
      json.set! json.partial! "/api/pinboards/pinboard", pinboard: pinboard

      json.pinnings do
        @pinnings.limit(3).each do |pinning|
          json.set! pinning.pin_id do 
            @pin = Pin.find(pinning.pin_id)
            json.set! json.partial! "/api/pins/pin", pin: @pin
          end
        end
      end

    end
  end
end