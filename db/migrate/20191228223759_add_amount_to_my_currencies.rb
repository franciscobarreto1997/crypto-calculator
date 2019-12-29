class AddAmountToMyCurrencies < ActiveRecord::Migration[6.0]
  def change
    add_column :my_currencies, :amount, :integer
  end
end
