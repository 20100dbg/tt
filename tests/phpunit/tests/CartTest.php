<?php

use App\Cart;
use PHPUnit\Framework\TestCase;

class CartTest extends TestCase 
{
    protected $cart;

    protected function setUp(): void
    {
        $this->cart = new Cart();
    }

    protected function tearDown(): void
    {
        Cart::$tax = 1.2;
    }

    public function test_if_the_cart_tax_value_can_be_changed_statically()
    {
        Cart::$tax = 1.5;

        $this->cart->price = 10;

        $netPrice = $this->cart->getNetPrice();

        $this->assertEquals(15, $netPrice);
    }

    public function testCorrectNetPriceIsReturned()
    {
        $this->cart->price = 10;
        $netPrice = $this->cart->getNetPrice();

        $this->assertEquals(12, $netPrice);
    }

    public function test_type_error_addToPrice()
    {
        $this->expectException(TypeError::class);
        $this->cart->addToPrice('fifteen');
    }


    public function test_type_error_addToPriceTryCatch()
    {
        try {
            $this->cart->addToPrice('fifteen');
            $this->fail("A TypeEror should have been thrown");
        }
        catch (TypeError $error){
            $this->assertStringStartsWith('App\Cart::addToPrice():', $error->getMessage());
        }
    }


}