class CurrenciesController < ApplicationController

  before_action :find_currency, only: [:calculate]

  def index
  end

  def search
    @currencies = Currency.where('LOWER(name) LIKE ?', "%#{params[:search].downcase}%")
    render json: { currencies: @currencies }
  end

  def calculate
    render json: {
      currency: currency,
      current_price: currency.current_price,
      amout: params[:amout],
      value: currency.calculate_value(params[:amount])
    }
  end

  private

  def find_currency
    @currency ||= Currency.find(params[:id])
  end
end
