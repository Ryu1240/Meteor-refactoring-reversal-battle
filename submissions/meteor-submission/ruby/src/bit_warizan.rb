# 符号なし64bitマスク
MASK64 = 0xFFFFFFFFFFFFFFFF
MASK32 = 0xFFFFFFFF

def bit_warizan(x,y)
    # 符号なし64bitとして扱う
    # bit_x: 被除数（上位32bitに配置）
    # bit_y: 除数（上位32bitに配置）
    bit_x = x & MASK64
    bit_y = ((y & MASK32) << 32) & MASK64
    bit_result = 0 & MASK32

    for i in 0..32
        bit_x = bit_x + ((~bit_y + 1)) & MASK64
        if (bit_x >> 63) == 0 # 符号なし64bitで最上位ビットが0なら非負
            bit_result = (bit_result << 1) + 1
        else
            bit_x = (bit_x + bit_y) & MASK64
            bit_result = (bit_result << 1)
        end
        bit_y = (bit_y >> 1) & MASK64
    end

    bit_x & MASK32
end
