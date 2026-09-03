<?php

use App\Inventory;
use PHPUnit\Framework\TestCase;

class InventoryTest extends TestCase 
{
    public function testProductsCanBeSet()
    {
        $mockRepo = $this->createMock(\App\ProductRepository::class);

        $inventory = new Inventory($mockRepo);

        $mockRepo
            ->expects($this->once())
            ->method('fetchProducts')
            ->willReturn([
                ["id"=> 1, "name"=> "car", "price"=> 9000],
                ["id"=> 2, "name"=> "house", "price"=> 130000],
            ]);

        $inventory->setProducts();
        $products = $inventory->getProducts();

        $this->assertEquals("car", $products[0]['name']);
        $this->assertEquals("house", $products[1]['name']);
    }
}