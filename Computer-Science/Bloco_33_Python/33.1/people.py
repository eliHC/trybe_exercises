import area


PEOPLE_PER_SQUARE_METER = 10
FIELD_LENGTH = 500
FIELD_WIDTH = 200
PEOPLE_AT_CONCERT = (
    area.rectangle(FIELD_LENGTH, FIELD_WIDTH) // PEOPLE_PER_SQUARE_METER
)


print(f"Estão presentes {PEOPLE_AT_CONCERT} pessoas no concerto.")
