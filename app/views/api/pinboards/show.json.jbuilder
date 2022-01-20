
  json.set! json.partial! "/api/pinboards/pinboard", pinboard: @pinboard


json.pinnings do
  @pinnings.each do |pinning|
    json.set! pinning.pin_id do 
      @pin = Pin.find(pinning.pin_id)
      json.set! json.partial! "/api/pins/pin", pin: @pin
    end
  end
end