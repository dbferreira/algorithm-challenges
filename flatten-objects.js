var chai = require('chai');
var expect = chai.expect;

function flatten(a) {
    if (a.length == 0) return;
    var o = {};
    o.id = a[0].id;
    o.level = a[0].level;
    o.text = a[0].text;
    o.type = a[0].type
    o.items = a[0].items == null ? null : []
    r.push(o);
    if (Array.isArray(a[0].items)) {
        flatten(a[0].items);
    }
    a.shift();
    flatten(a);
}

const o = {
    "Borders and Boundaries": {
        "User:183.SewerOptional.Cadastral!.Borders and Boundaries": {
            "identity": "User:183.SewerOptional.Cadastral!.Borders and Boundaries",
            "enabled": false,
            "locked": false
        },
        "User:183.SewerOptional.Farms!.Borders and Boundaries": {
            "identity": "User:183.SewerOptional.Farms!.Borders and Boundaries",
            "enabled": false,
            "locked": false
        },
        "User:183.SewerOptional.Suburbs!.Borders and Boundaries": {
            "identity": "User:183.SewerOptional.Suburbs!.Borders and Boundaries",
            "enabled": false,
            "locked": false
        },
        "User:183.SewerOptional.Wards!.Borders and Boundaries": {
            "identity": "User:183.SewerOptional.Wards!.Borders and Boundaries",
            "enabled": false,
            "locked": false
        }
    },
    "Other": {
        "User:183.SewerOptional.Existing Drainage Areas": {
            "identity": "User:183.SewerOptional.Existing Drainage Areas",
            "enabled": false,
            "locked": false
        },
        "User:183.SewerOptional.Existing House Connections": {
            "identity": "User:183.SewerOptional.Existing House Connections",
            "enabled": false,
            "locked": false
        },
        "User:183.SewerOptional.Future Drainage Areas": {
            "identity": "User:183.SewerOptional.Future Drainage Areas",
            "enabled": false,
            "locked": false
        },
        "User:183.SewerOptional.GreenDrop": {
            "identity": "User:183.SewerOptional.GreenDrop",
            "enabled": false,
            "locked": false
        },
        "User:183.SewerOptional.Planbooks": {
            "identity": "User:183.SewerOptional.Planbooks",
            "enabled": false,
            "locked": false
        },
        "User:183.SewerOptional.Preliminary House Connections": {
            "identity": "User:183.SewerOptional.Preliminary House Connections",
            "enabled": false,
            "locked": false
        },
        "User:183.SewerOptional.Telemetry": {
            "identity": "User:183.SewerOptional.Telemetry",
            "enabled": false,
            "locked": false
        },
        "User:183.SewerOptional.Wastewater Treatment Plants": {
            "identity": "User:183.SewerOptional.Wastewater Treatment Plants",
            "enabled": false,
            "locked": false
        },
        "User:183.AnyOptional.Uploaded Documents": {
            "identity": "User:183.AnyOptional.Uploaded Documents",
            "enabled": false,
            "locked": false
        }
    },
    "Master Plans": {
        "User:183.SewerOptional.Master Plan Projects!.Master Plans": {
            "identity": "User:183.SewerOptional.Master Plan Projects!.Master Plans",
            "enabled": false,
            "locked": false
        }
    },
    "Third Party": {
        "User:183.SewerOptional.MyCity!.Third Party": {
            "identity": "User:183.SewerOptional.MyCity!.Third Party",
            "enabled": false,
            "locked": false
        }
    },
    "SewerSlips": {
        "User:183.Generic.Optional#Sewer Slips!.SewerSlips": {
            "identity": "User:183.Generic.Optional#Sewer Slips!.SewerSlips",
            "enabled": false,
            "locked": false
        }
    },
    "Township_Applications": {
        "User:183.Generic.Optional#Township Applications!.Township_Applications": {
            "identity": "User:183.Generic.Optional#Township Applications!.Township_Applications",
            "enabled": false,
            "locked": false
        }
    }
};

console.log(flatten(o));