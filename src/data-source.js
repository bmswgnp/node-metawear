
var registers = require('./registers/registers');

const
    DISABLE     = 0x0,
    ENABLE      = 0x1;
    NO_DATA_ID  = 0xff;

var DataSourceId = {
    SWITCH               : 0,
    ACCEL_MMA8452Q       : 1,
    ACCEL_BMI160         : 2,
    BARO_BMP280_PRESSURE : 3,
    BARO_BMP280_ALTITUDE : 4,
    GYRO_BMI160          : 5,
    ALS_LTR329           : 6
};

var DataType = {
    UINT                : 0,
    INT                 : 1,
    BMP280_PRESSURE     : 2,
    BMP280_ALTITUDE     : 3,
    BMI160_THREE_AXIS   : 4,
    MMA8452Q_THREE_AXIS : 5
};

var ProcessorId = {
    ACCUMULATOR : 0x2,
    COMPARISON  : 0x6,
    MATH        : 0x9
};

var DataSource = function(module_id, register_id, data_id, data_type_id, is_signed, length, offset) {
    this.module_id      = module_id;
    this.register_id    = register_id;
    this.data_id        = data_id;
    this.data_type_id   = data_type_id;
    this.is_signed      = is_signed;
    this.length         = length;
    this.offset         = offset;
};

var DataSources = {
    new DataSource(registers.byName('SWITCH'),       DataSourceId.SWITCH_DATA, NO_DATA_ID, DT_ID_UINT, 0, 1, 0},
    new DataSource(registers.byName('ACC_MMA8452Q'), DataSourceId.ACC_MMA8452Q_DATA, NO_DATA_ID, DT_ID_MMA8452Q_THREE_AXIS, 1, 6, 0},
    new DataSource(registers.byName('ACC_BMI160'),   DataSourceId.ACC_BMI160_DATA, NO_DATA_ID, DT_ID_BMI160_THREE_AXIS, 1, 6, 0},
    new DataSource(registers.byName('BAROMETER'),    DataSourceId.BARO_BMP280_PRESSURE_DATA, NO_DATA_ID, DT_ID_BMP280_PRESSURE, 0, 4, 0},
    new DataSource(registers.byName('BAROMETER'),    DataSourceId.BARO_BMP280_ALTITUDE_DATA, NO_DATA_ID, DT_ID_BMP280_ALTITUDE, 1, 4, 0},
    new DataSource(registers.byName('GYRO'),         DataSourceId.GYRO_BMI160_DATA, NO_DATA_ID, DT_ID_BMI160_THREE_AXIS, 1, 6, 0},
    new DataSource(registers.byName('ALS_LTR329'),   DataSourceId.ALS_LTR329_DATA, NO_DATA_ID, DT_ID_UINT, 0, 4, 0}
};

static const DataSource data_sources[]= {
{MBL_MW_SWITCH_MODULE, MBL_MW_SWITCH_DATA, NO_DATA_ID, DT_ID_UINT, 0, 1, 0},
{MBL_MW_ACC_MMA8452Q_MODULE, MBL_MW_ACC_MMA8452Q_DATA, NO_DATA_ID, DT_ID_MMA8452Q_THREE_AXIS, 1, 6, 0},
{MBL_MW_ACC_BMI160_MODULE, MBL_MW_ACC_BMI160_DATA, NO_DATA_ID, DT_ID_BMI160_THREE_AXIS, 1, 6, 0},
{MBL_MW_BARO_BMP280_MODULE, MBL_MW_BARO_BMP280_PRESSURE_DATA, NO_DATA_ID, DT_ID_BMP280_PRESSURE, 0, 4, 0},
{MBL_MW_BARO_BMP280_MODULE, MBL_MW_BARO_BMP280_ALTITUDE_DATA, NO_DATA_ID, DT_ID_BMP280_ALTITUDE, 1, 4, 0},
{MBL_MW_GYRO_BMI160_MODULE, MBL_MW_GYRO_BMI160_DATA, NO_DATA_ID, DT_ID_BMI160_THREE_AXIS, 1, 6, 0},
{MBL_MW_ALS_LTR329_MODULE, MBL_MW_ALS_LTR329_DATA, NO_DATA_ID, DT_ID_UINT, 0, 4, 0}
};
