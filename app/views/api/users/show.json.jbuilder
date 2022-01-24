json.user do 
  json.partial! "/api/users/user", user: @user
end 

json.pinboards do  
  @pinboards.each do |pinboard| 
    json.set! pinboard.id do 
      json.set! json.partial! "/api/pinboards/pinboard", pinboard: pinboard
    end
  end
end