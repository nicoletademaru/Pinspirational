@users.each do |user| 
  json.set! user.id do 
    json.set! json.partial! "/api/users/user", user: user
  end
end