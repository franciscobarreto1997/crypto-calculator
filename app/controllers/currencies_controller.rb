class CurrenciesController < ApplicationController

  def index
  end

  def search
    @currencies = Currency.where('LOWER(name) LIKE ?', "%#{params[:search].downcase}%")
    puts @currencies.count
    render json: { currencies: @currencies }
  end

  def calculate
    render json: {
      currency: currency,
      current_price: currency.current_price,
      amount: params[:amount],
      value: currency.calculate_value(params[:amount])
    }
  end

  private

  def currency
    @currency ||= Currency.find(params[:id])
  end
end
