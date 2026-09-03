<?php

use PHPUnit\Framework\TestCase;

class MockProductsTest extends TestCase
{
    public function testMockProductsAreReturned()
    {
        $mockRepo = $this->createMock(\App\ProductRepository::class);

        $mockRepo
            ->expects($this->once())
            ->method('fetchProducts')
            ->willReturn([
                ["id"=> 1, "name"=> "car", "price"=> 9000],
                ["id"=> 2, "name"=> "house", "price"=> 130000],
            ]);

        $products = $mockRepo->fetchProducts();

        $this->assertCount(2, $products);
        $this->assertEquals("car", $products[0]['name']);

    }
}