<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{

    // read
    public function index()
    {
        $products = Product::all();

        if($products->count() > 0) {
            return response()->json([
                'status' => 200,
                'products' => $products
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'products' => "no products found"
            ], 404);
        }
    }

    // create
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'price' => 'required|integer|max:191',
            'image' => 'required|string|max:255',

        ]);

        if($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }else {
            $product = Product::create([
                'name' => $request->name,
                'price' => $request->price,
                'image' => $request->image,
            ]);
            if($product) {
                return response()->json([
                    'status' => 200,
                    'message' => "product created successfully!"
                ], 200);
            } else {
                return response()->json([
                    'status' => 500,
                    'message' => "product not created. something went wrong!"
                ], 500);
            }
        }


    }

    public function show($id)
    {
        $product = Product::find($id);
        if($product) {
            return response()->json([
                'status' => 200,
                'product' => $product
            ], 200);
        }else {
            return response()->json([
                'status' => 404,
                'message' => "no product with that id found"
            ], 404);
        }
    }

    public function delete(Request $request)
    {
        $message = 'product not found';
        $product = Product::whereId($request->id)->first();
        if(!is_null($product)){
            $product->delete();
            $message = 'product deleted successfully';
        }
        return response()->json(
            $message, 200
        );
    }

    public function edit($id)
    {

        $product = Product::find($id);
        if($product) {
            return response()->json([
                'status' => 200,
                'product' => $product
            ], 200);
        }else {
            return response()->json([
                'status' => 404,
                'message' => "no product with that id found"
            ], 404);
        }

    }


    //update
    public function update(Request $request, int $id)
    {


        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'price' => 'required|integer|max:191',
            'image' => 'required|string|max:255',

        ]);

        if($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }else {
            $product = Product::find($id);
            if($product) {
                $product->update([
                    'name' => $request->name,
                    'price' => $request->price,
                    'image' => $request->image,
                ]);

                return response()->json([
                    'status' => 200,
                    'message' => "product updated successfully!"
                ], 200);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => "product not updated. something went wrong!"
                ], 404);
            }
        }


    }


}
