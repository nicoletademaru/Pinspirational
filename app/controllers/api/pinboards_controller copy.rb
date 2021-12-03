class Api::PinningsController < ApplicationController
  def create 
    @pinning = Pinning.new(pinning_params)

    if @pinning.save 
      render :show
    else
      render json: @pinboard.errors.full_messages, status:422
    end
  end


  def destroy 
    @pinning = Pinning.find(params[:id])
    if @pinning.destroy
    else 
      render json: ['Cannot destroy pin']
    end
  end

  private 

  def pinnings_params
    params.requre(:pinning).permit(:pin_id, :pinboard_id)
  end

end
