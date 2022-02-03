json.pinboard do
  json.set! json.partial! "/api/pinboards/pinboard", pinboard: @pinboard
end

json.pinnings do
  if @pinnings
    @pinnings.each do |pinning|
      json.set! pinning.id do 
        @pin = Pin.find(pinning.pin_id)
        json.pinning pinning.id
        json.set! json.partial! "/api/pins/pin", pin: @pin
      end
    end
  end
end