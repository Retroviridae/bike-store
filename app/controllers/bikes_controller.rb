class BikesController < ApplicationController
    skip_before_action :authorize

    def index
        bikes = Bike.all
        render json: bikes
    end

    def create
        # byebug
        bike = Bike.create!(model:params[:model],maker:params[:maker],img:params[:thumbnailUrl],category:params[:category],url:params[:url])
        render json: bike
    end

    private

    def bike_params
        params.permit(:model, :maker, :price,)
    end

end

