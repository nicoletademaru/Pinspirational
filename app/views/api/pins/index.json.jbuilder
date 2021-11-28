@pins.each do |pin| 
  json.set! pin.id do 
    json.set! json.partial! "/api/pins/pin", pin: pin
  end
end