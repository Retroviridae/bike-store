class OrdersController < ApplicationController
    skip_before_action :authorize




    def index
        orders = Order.all
        render json: orders
    end



    def create
        # byebug
        order = Order.create!(
            cart:params[:cart],
            address:params[:address1],
            city:params[:city],
            state:params[:state].upcase,
            zip:params[:zip],
            cardName:params[:cardName],
            expiration:params[:expDate],
            cardNumber:params[:cardNumber],
            cvv:params[:cvv],
            user_id:params[:user_id]
        )
        render json: order, status: :created
    end

    def destroy
        # byebug
        order = Order.find(params[:id])
        order.destroy
        user = User.find(session[:user_id])
        render json: user
    end

    # private

    # def order_params
    #     params.permit(:cart,:address,:city,:state,:zip,:cardName,:expiration,:cardNumber,:cvv, :user_id)
    # end
end
