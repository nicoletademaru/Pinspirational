class Api::PinningsController < ApplicationController
  def create 
    @pinning = Pinning.new(pinning_params)

    if @pinning.save 
      render :show
    else
      render json: @pinning.errors.full_messages, status:422
    end
  end

  def show 
    @pinning = Pinning.find(params[:id])

    render :show
  end

  def index 
    if params.has_key?(:pinboard_id)
      @pinnings = Pinning.where(pinboard_id: params[:pinboard_id])
      @pinboard = Pinboard.find(params[:pinboard_id])

      # @pinnings.each do |pinning| 
      #   @pin = Pin.find(pinning.pin_id)
      # end

      render "api/pinboards/show"
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
    params.require(:pinning).permit(:pin_id, :pinboard_id)
  end

end
