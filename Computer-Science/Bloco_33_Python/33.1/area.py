PI = 3.14159


def square(side):
    """Calculate are of a square."""

    return side * side


def rectangle(width, height):
    """Calculate area of a rectangle."""

    return width * height


def circle(radius):
    """Calculate area of a circle.
    lorem ipsum dolor sit amet consectetur
    adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat."""

    return PI * radius * radius


if __name__ == '__main__':
    print("Area of a square: ", square(20))
    print("Area of a rectangle: ", rectangle(20, 30))
    print("Area of a circle: ", circle(10), circle.__doc__)


# ------------------------------------------------------------------------------
