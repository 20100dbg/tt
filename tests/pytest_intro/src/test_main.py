#from main import get_weather_city
import main
import pytest

"""

#assert
def test_get_weather():
    assert main.get_weather(21) == "hot"

def test_add():
    assert main.add(2,3) == 5, "2+3 should be 5"
    assert main.add(-1,1) == 0
    assert main.add(0,0) == 0

#with raise catcher
def test_divide():
    with pytest.raises(ValueError, match="Cannot divide by zero"):
        main.divide(10, 0)


#fixture
@pytest.fixture
def user_manager():
    return main.UserManager()

def test_add_user(user_manager):
    assert user_manager.add_user("john_doe", "john@example.com") == True
    assert user_manager.get_user("john_doe") == "john@example.com"

def test_add_duplicate_user(user_manager):
    user_manager.add_user("john_doe", "john@example.com")
    with pytest.raises(ValueError):
        user_manager.add_user("john_doe", "john@example.com")


#parameterized
@pytest.mark.parametrize("num, expected", [
    (1, False),
    (2, True),
    (3, True),
    (4, False),
    (17, True),
    (18, False),
    (19, True),
    (25, False),
])
def test_is_prime(num, expected):
    assert main.is_prime(num) == expected


"""

#mocks
def test_get_weather_city(mocker):
    mock_get = mocker.patch("main.requests.get")

    mock_get.return_value.status_code = 200
    mock_get.return_value.json.return_value = {"temperature": 25, "condition": "Sunny"}

    result = main.get_weather_city("Dubai")

    assert result == {"temperature": 25, "condition": "Sunny"}
    mock_get.assert_called_once_with("https://api.weather.com/v1/Dubai")


def test_save_user(mocker):
    mock_conn = mocker.patch("sqlite3.connect")
    mock_cursor = mock_conn.return_value.cursor.return_value

    main.save_user("Alice", 30)

    mock_conn.assert_called_once_with("users.db")
    mock_cursor.execute.assert_called_once_with(
        "INSERT INTO users (name,age) VALUES (?,?)", ("Alice", 30)
        )