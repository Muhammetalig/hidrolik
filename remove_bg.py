from PIL import Image

def remove_white_background(input_path, output_path):
    # Open the image and ensure it has an alpha channel
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        # Check if the pixel is near-white (R, G, B all > 220)
        # For a smoother anti-aliased edge, we could do sophisticated math,
        # but for a simple logo, simple thresholding is a start.
        if item[0] > 220 and item[1] > 220 and item[2] > 220:
            # Fully transparent white
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

remove_white_background("public/logo.jpeg", "public/logo.png")
